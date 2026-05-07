import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1374 } from '../generated/copy/copy1374';
import { layout1374 } from '../generated/layouts/layout1374';
import { palette1374 } from '../generated/palettes/palette1374';

const RuntimeView1374 = withUniwind(View);

export function Screen1374() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1374 styleClassName={layout1374.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1374.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1374.detail} / {palette1374.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
