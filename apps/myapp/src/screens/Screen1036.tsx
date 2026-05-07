import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1036 } from '../generated/copy/copy1036';
import { layout1036 } from '../generated/layouts/layout1036';
import { palette1036 } from '../generated/palettes/palette1036';

const RuntimeView1036 = withUniwind(View);

export function Screen1036() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1036 styleClassName={layout1036.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1036.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1036.detail} / {palette1036.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
