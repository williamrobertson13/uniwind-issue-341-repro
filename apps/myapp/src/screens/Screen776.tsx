import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy776 } from '../generated/copy/copy776';
import { layout776 } from '../generated/layouts/layout776';
import { palette776 } from '../generated/palettes/palette776';

const RuntimeView776 = withUniwind(View);

export function Screen776() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView776 styleClassName={layout776.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy776.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy776.detail} / {palette776.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
