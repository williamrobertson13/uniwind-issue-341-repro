import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1047 } from '../generated/copy/copy1047';
import { layout1047 } from '../generated/layouts/layout1047';
import { palette1047 } from '../generated/palettes/palette1047';

const RuntimeView1047 = withUniwind(View);

export function Screen1047() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1047 styleClassName={layout1047.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1047.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1047.detail} / {palette1047.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
