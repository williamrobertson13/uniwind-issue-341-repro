import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1050 } from '../generated/copy/copy1050';
import { layout1050 } from '../generated/layouts/layout1050';
import { palette1050 } from '../generated/palettes/palette1050';

const RuntimeView1050 = withUniwind(View);

export function Screen1050() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1050 styleClassName={layout1050.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1050.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1050.detail} / {palette1050.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
