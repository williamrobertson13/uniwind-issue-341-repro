import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy296 } from '../generated/copy/copy296';
import { layout296 } from '../generated/layouts/layout296';
import { palette296 } from '../generated/palettes/palette296';

const RuntimeView296 = withUniwind(View);

export function Screen296() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView296 styleClassName={layout296.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy296.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy296.detail} / {palette296.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
