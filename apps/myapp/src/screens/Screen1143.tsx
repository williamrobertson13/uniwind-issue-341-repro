import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1143 } from '../generated/copy/copy1143';
import { layout1143 } from '../generated/layouts/layout1143';
import { palette1143 } from '../generated/palettes/palette1143';

const RuntimeView1143 = withUniwind(View);

export function Screen1143() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1143 styleClassName={layout1143.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1143.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1143.detail} / {palette1143.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
