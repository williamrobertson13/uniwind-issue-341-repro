import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1194 } from '../generated/copy/copy1194';
import { layout1194 } from '../generated/layouts/layout1194';
import { palette1194 } from '../generated/palettes/palette1194';

const RuntimeView1194 = withUniwind(View);

export function Screen1194() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1194 styleClassName={layout1194.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1194.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1194.detail} / {palette1194.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
