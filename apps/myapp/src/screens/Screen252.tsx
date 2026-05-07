import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy252 } from '../generated/copy/copy252';
import { layout252 } from '../generated/layouts/layout252';
import { palette252 } from '../generated/palettes/palette252';

const RuntimeView252 = withUniwind(View);

export function Screen252() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView252 styleClassName={layout252.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy252.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy252.detail} / {palette252.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
