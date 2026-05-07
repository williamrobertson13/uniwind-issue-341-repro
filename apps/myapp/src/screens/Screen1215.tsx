import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1215 } from '../generated/copy/copy1215';
import { layout1215 } from '../generated/layouts/layout1215';
import { palette1215 } from '../generated/palettes/palette1215';

const RuntimeView1215 = withUniwind(View);

export function Screen1215() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1215 styleClassName={layout1215.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1215.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1215.detail} / {palette1215.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
