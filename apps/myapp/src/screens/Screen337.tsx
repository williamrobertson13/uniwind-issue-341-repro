import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy337 } from '../generated/copy/copy337';
import { layout337 } from '../generated/layouts/layout337';
import { palette337 } from '../generated/palettes/palette337';

const RuntimeView337 = withUniwind(View);

export function Screen337() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView337 styleClassName={layout337.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy337.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy337.detail} / {palette337.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
