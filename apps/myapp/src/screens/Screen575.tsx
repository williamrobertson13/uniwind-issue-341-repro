import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy575 } from '../generated/copy/copy575';
import { layout575 } from '../generated/layouts/layout575';
import { palette575 } from '../generated/palettes/palette575';

const RuntimeView575 = withUniwind(View);

export function Screen575() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView575 styleClassName={layout575.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy575.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy575.detail} / {palette575.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
