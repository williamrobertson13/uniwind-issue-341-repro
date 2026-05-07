import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1152 } from '../generated/copy/copy1152';
import { layout1152 } from '../generated/layouts/layout1152';
import { palette1152 } from '../generated/palettes/palette1152';

const RuntimeView1152 = withUniwind(View);

export function Screen1152() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1152 styleClassName={layout1152.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1152.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1152.detail} / {palette1152.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
