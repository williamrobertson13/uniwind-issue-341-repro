import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy727 } from '../generated/copy/copy727';
import { layout727 } from '../generated/layouts/layout727';
import { palette727 } from '../generated/palettes/palette727';

const RuntimeView727 = withUniwind(View);

export function Screen727() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView727 styleClassName={layout727.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy727.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy727.detail} / {palette727.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
