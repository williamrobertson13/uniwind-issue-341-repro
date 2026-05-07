import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy591 } from '../generated/copy/copy591';
import { layout591 } from '../generated/layouts/layout591';
import { palette591 } from '../generated/palettes/palette591';

const RuntimeView591 = withUniwind(View);

export function Screen591() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView591 styleClassName={layout591.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy591.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy591.detail} / {palette591.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
