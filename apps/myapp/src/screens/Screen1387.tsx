import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1387 } from '../generated/copy/copy1387';
import { layout1387 } from '../generated/layouts/layout1387';
import { palette1387 } from '../generated/palettes/palette1387';

const RuntimeView1387 = withUniwind(View);

export function Screen1387() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1387 styleClassName={layout1387.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1387.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1387.detail} / {palette1387.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
