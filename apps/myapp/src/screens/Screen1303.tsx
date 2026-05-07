import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1303 } from '../generated/copy/copy1303';
import { layout1303 } from '../generated/layouts/layout1303';
import { palette1303 } from '../generated/palettes/palette1303';

const RuntimeView1303 = withUniwind(View);

export function Screen1303() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1303 styleClassName={layout1303.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1303.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1303.detail} / {palette1303.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
