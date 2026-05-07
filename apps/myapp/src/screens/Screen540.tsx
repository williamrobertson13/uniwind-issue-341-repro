import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy540 } from '../generated/copy/copy540';
import { layout540 } from '../generated/layouts/layout540';
import { palette540 } from '../generated/palettes/palette540';

const RuntimeView540 = withUniwind(View);

export function Screen540() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView540 styleClassName={layout540.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy540.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy540.detail} / {palette540.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
