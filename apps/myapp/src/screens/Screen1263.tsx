import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1263 } from '../generated/copy/copy1263';
import { layout1263 } from '../generated/layouts/layout1263';
import { palette1263 } from '../generated/palettes/palette1263';

const RuntimeView1263 = withUniwind(View);

export function Screen1263() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1263 styleClassName={layout1263.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1263.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1263.detail} / {palette1263.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
