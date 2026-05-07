import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy665 } from '../generated/copy/copy665';
import { layout665 } from '../generated/layouts/layout665';
import { palette665 } from '../generated/palettes/palette665';

const RuntimeView665 = withUniwind(View);

export function Screen665() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView665 styleClassName={layout665.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy665.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy665.detail} / {palette665.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
