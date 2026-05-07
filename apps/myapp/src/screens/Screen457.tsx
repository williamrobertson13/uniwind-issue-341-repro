import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy457 } from '../generated/copy/copy457';
import { layout457 } from '../generated/layouts/layout457';
import { palette457 } from '../generated/palettes/palette457';

const RuntimeView457 = withUniwind(View);

export function Screen457() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView457 styleClassName={layout457.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy457.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy457.detail} / {palette457.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
