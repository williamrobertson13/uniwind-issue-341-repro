import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy431 } from '../generated/copy/copy431';
import { layout431 } from '../generated/layouts/layout431';
import { palette431 } from '../generated/palettes/palette431';

const RuntimeView431 = withUniwind(View);

export function Screen431() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView431 styleClassName={layout431.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy431.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy431.detail} / {palette431.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
