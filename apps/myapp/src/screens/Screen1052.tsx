import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1052 } from '../generated/copy/copy1052';
import { layout1052 } from '../generated/layouts/layout1052';
import { palette1052 } from '../generated/palettes/palette1052';

const RuntimeView1052 = withUniwind(View);

export function Screen1052() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1052 styleClassName={layout1052.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1052.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1052.detail} / {palette1052.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
