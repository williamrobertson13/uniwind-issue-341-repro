import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1267 } from '../generated/copy/copy1267';
import { layout1267 } from '../generated/layouts/layout1267';
import { palette1267 } from '../generated/palettes/palette1267';

const RuntimeView1267 = withUniwind(View);

export function Screen1267() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1267 styleClassName={layout1267.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1267.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1267.detail} / {palette1267.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
