import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy985 } from '../generated/copy/copy985';
import { layout985 } from '../generated/layouts/layout985';
import { palette985 } from '../generated/palettes/palette985';

const RuntimeView985 = withUniwind(View);

export function Screen985() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView985 styleClassName={layout985.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy985.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy985.detail} / {palette985.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
