import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy68 } from '../generated/copy/copy68';
import { layout68 } from '../generated/layouts/layout68';
import { palette68 } from '../generated/palettes/palette68';

const RuntimeView68 = withUniwind(View);

export function Screen68() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView68 styleClassName={layout68.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy68.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy68.detail} / {palette68.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
