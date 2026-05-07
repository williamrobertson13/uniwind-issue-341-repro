import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy385 } from '../generated/copy/copy385';
import { layout385 } from '../generated/layouts/layout385';
import { palette385 } from '../generated/palettes/palette385';

const RuntimeView385 = withUniwind(View);

export function Screen385() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView385 styleClassName={layout385.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy385.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy385.detail} / {palette385.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
