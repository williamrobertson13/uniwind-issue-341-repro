import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy695 } from '../generated/copy/copy695';
import { layout695 } from '../generated/layouts/layout695';
import { palette695 } from '../generated/palettes/palette695';

const RuntimeView695 = withUniwind(View);

export function Screen695() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView695 styleClassName={layout695.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy695.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy695.detail} / {palette695.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
