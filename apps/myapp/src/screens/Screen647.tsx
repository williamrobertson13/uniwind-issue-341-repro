import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy647 } from '../generated/copy/copy647';
import { layout647 } from '../generated/layouts/layout647';
import { palette647 } from '../generated/palettes/palette647';

const RuntimeView647 = withUniwind(View);

export function Screen647() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView647 styleClassName={layout647.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy647.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy647.detail} / {palette647.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
