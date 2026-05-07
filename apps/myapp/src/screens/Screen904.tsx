import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy904 } from '../generated/copy/copy904';
import { layout904 } from '../generated/layouts/layout904';
import { palette904 } from '../generated/palettes/palette904';

const RuntimeView904 = withUniwind(View);

export function Screen904() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView904 styleClassName={layout904.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy904.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy904.detail} / {palette904.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
